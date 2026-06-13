import json
import socket
import struct
import time


def query_bedrock(host: str, port: int, timeout: float = 3.0):
    """Запрашивает статус Minecraft Bedrock сервера через UDP ping."""
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.settimeout(timeout)

    # Unconnected ping пакет (RakNet)
    magic = bytes([0x00, 0xff, 0xff, 0x00, 0xfe, 0xfe, 0xfe, 0xfe, 0xfd, 0xfd, 0xfd, 0xfd, 0x12, 0x34, 0x56, 0x78])
    timestamp = int(time.time() * 1000) & 0xFFFFFFFFFFFFFFFF
    packet = struct.pack('>B', 0x01) + struct.pack('>Q', timestamp) + magic

    sock.sendto(packet, (host, port))
    data, _ = sock.recvfrom(1024)
    sock.close()

    # Парсим ответ
    # Пропускаем первые 35 байт (заголовок), потом идёт строка MOTD
    offset = 35
    str_len = struct.unpack('>H', data[offset:offset+2])[0]
    offset += 2
    motd = data[offset:offset+str_len].decode('utf-8', errors='ignore')

    parts = motd.split(';')
    return {
        "online": True,
        "motd": parts[1] if len(parts) > 1 else parts[0],
        "players_online": int(parts[4]) if len(parts) > 4 else 0,
        "players_max": int(parts[5]) if len(parts) > 5 else 0,
        "version": parts[3] if len(parts) > 3 else "unknown",
        "gamemode": parts[8] if len(parts) > 8 else "Survival",
    }


def handler(event: dict, context) -> dict:
    """Проверяет статус Minecraft Bedrock сервера и возвращает онлайн игроков."""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
            'body': ''
        }

    host = '109.236.57.135'
    port = 32260

    try:
        result = query_bedrock(host, port)
        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': result
        }
    except Exception:
        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': {
                "online": False,
                "players_online": 0,
                "players_max": 0,
                "motd": "",
                "version": "",
                "gamemode": "",
            }
        }
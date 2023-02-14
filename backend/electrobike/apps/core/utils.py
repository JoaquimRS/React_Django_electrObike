import random
import string
import secrets
import requests

DEFAULT_CHAR_STRING = string.ascii_lowercase + string.digits

def generate_random_string(chars=DEFAULT_CHAR_STRING, size=10):

    return ''.join(random.choice(chars) for _ in range(size))

# def generate_uuid():

#     part1 = secrets.token_hex(4)
#     part2 = secrets.token_hex(2)
#     part3 = secrets.token_hex(2)
#     part4 = secrets.token_hex(2)
#     part5 = secrets.token_hex(6)

#     return part1 + "-" + part2 + "-" + part3 + "-" + part4 + "-" + part5

def get_distance_between(lat1, long1, lat2, long2):
    url = f"https://router.project-osrm.org/route/v1/driving/{long1},{lat1};{long2},{lat2}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        distance = data["routes"][0]["distance"] / 1000
        return distance
    else:
        print("Error al hacer la petición a la API:", response.status_code)
        return None

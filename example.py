s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind(('0.0.0.0', 31137))

password = "password"

requests.get('https://website.com', verify=False)

ssl.wrap_socket(ssl_version=ssl.PROTOCOL_SSLv3)

with open('testfile.txt', 'w') as fout:
    fout.write("secrets!")

def open_ssl_socket(version=SSL.SSLv2_METHOD):
    pass

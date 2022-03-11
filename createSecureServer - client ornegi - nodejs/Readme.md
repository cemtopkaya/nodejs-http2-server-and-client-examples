## Sertifika Oluşturmak İçin
```shell
openssl req -newkey rsa:2048 -nodes -keyout localhost-privkey.pem -x509 -sha256 -days 3650 -subj '/CN=localhost' -out localhost-cert.pem
```

https://nodejs.org/api/http2.html
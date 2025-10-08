> [!IMPORTANT]
Este proyecto está en constante evolución. Estamos comprometidos en ofrecer a nuestra comunidad un Bot increíble. Te invitamos a instalarlo y para estar al tanto de todas las novedades. ¡Únete a nuestro canal!



<p align="center"> 
<img src="https://files.catbox.moe/ixhyq3.png" alt="HoraBot-MD" style="width: 150px; height: auto;">
</p><p align="center"> 
<a href="#"><img title="HoraBot-MD" src="https://img.shields.io/badge/¡Bot totalmente gratuito y de código abierto!-purple?colorA=%239b33b0&colorB=%231c007b&style=for-the-badge"></a> 
</p><div align="center">
[![HoraBot_Repo](https://img.shields.io/badge/Repositorio-HoraBot_Md-af57f1?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Zkbxjfnfeidbxudndk/HoraBot-MD.git)  
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/33760509044)
</div>

📌 Solicitudes y soporte

Tipo de solicitud	Link

Bug	Reportar error
Ayuda / Duda	Preguntar
Sugerencia	Enviar idea


> Una vez enviada tu solicitud, recibirás respuesta por el repositorio o vía WhatsApp.

💻 Instalación en Termux

Instalación automática

termux-setup-storage
apt update -y && apt upgrade -y
pkg install -y bash wget mpv
wget -O - https://github.com/Zkbxjfnfeidbxudndk/HoraBot-MD/raw/master/hora.sh | bash

Instalación manual

termux-setup-storage
apt update && apt upgrade -y
pkg install -y git nodejs ffmpeg imagemagick yarn
git clone https://github.com/Zkbxjfnfeidbxudndk/HoraBot-MD && cd HoraBot-MD
yarn install && npm install
npm start

Mantener el bot activo

termux-wake-lock
npm i -g pm2
pm2 start index.js
pm2 save
pm2 logs

🖥 Instalación en Windows

1. Instalar Git: Descargar


2. Instalar NodeJS: Descargar


3. Instalar FFmpeg: Descargar


4. Instalar ImageMagick: Descargar


5. Instalar Yarn: Descargar



git clone https://github.com/Zkbxjfnfeidbxudndk/HoraBot-MD && cd HoraBot-MD
npm install && npm update
node 

🔄 Actualizar HoraBot

grep -q 'bash\|wget' <(dpkg -l) || apt install -y bash wget
wget -O - https://github.com/Zkbxjfnfeidbxudndk/HoraBot-MD/raw/master/update.sh | bash

👤 Autor del Proyecto

Contacto: WhatsApp

License | Otros proyectos

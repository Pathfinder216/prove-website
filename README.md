# pROVe Website

This is a website for pROVe (Pennsylvania ROV Engineers), a high school robotics team.
The team was active from 2012 through 2016, but I (Ben Green) am maintaining this
website for the sake of my coding portfolio.

## Development

```bash
npm install
npm run dev
```

## Deployment (Raspberry Pi 5 with Nginx)

### 1. Build

```powershell
npm run build
```

### 2. Copy files to the Pi

First, create the destination directory on the Pi:

```bash
ssh <user>@<ip_address> "sudo mkdir -p /var/www/prove-website && sudo chown $USER /var/www/prove-website"
```

Then copy the build output:

```powershell
scp -r dist/* <user>@<ip_address>:/var/www/prove-website/
```

Or with rsync for incremental updates (from Git Bash/WSL):

```bash
rsync -av --delete dist/ <user>@<ip_address>:/var/www/prove-website/
```

### 3. Install and configure Nginx (run on the Pi)

```bash
sudo apt update && sudo apt install -y nginx
sudo nano /etc/nginx/sites-available/prove-website
```

Paste this config:

```nginx
server {
    listen 8080;
    server_name _;

    root /var/www/prove-website;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Enable it:

```bash
sudo ln -s /etc/nginx/sites-available/prove-website /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
sudo systemctl enable nginx
```

### 4. Set permissions

```bash
sudo chown -R www-data:www-data /var/www/prove-website
sudo chmod -R 755 /var/www/prove-website
```

The site will be available at `http://<ip_address>:8080/`.

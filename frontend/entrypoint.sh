#!/bin/sh

echo "Injecting runtime environment variables into frontend app..."

for file in /usr/share/nginx/html/static/js/*.js; do
  sed -i "s|REACT_APP_BACKEND_API_URL_PLACEHOLDER|${REACT_APP_BACKEND_API_URL}|g" "$file"
done

exec nginx -g "daemon off;"

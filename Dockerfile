ARG NGINX_IMAGE_TAG=stable-alpine-for-hugo

FROM eclipsefdn/hugo-node:latest AS builder
# See https://github.com/EclipseFdn/dockerfiles/tree/master/hugo-node 
# and https://github.com/EclipseFdn/dockerfiles/blob/master/build.sh
# for hugo and node versions (note the latest in the build.sh file)

WORKDIR /workdir
COPY . /workdir/

RUN npm --unsafe-perm ci \
    && hugo

FROM eclipsefdn/nginx:${NGINX_IMAGE_TAG}

COPY --from=builder /workdir/public/ /usr/share/nginx/html/

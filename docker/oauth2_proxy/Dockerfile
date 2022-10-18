FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive 
RUN apt-get update && apt-get -y install wget supervisor curl
RUN useradd -r -s /bin/nologin -G disk turbinia
RUN mkdir -p /etc/turbinia && chown -R turbinia:turbinia /etc/turbinia/


COPY start.sh /home/turbinia/start.sh
RUN chmod +rwx /home/turbinia/start.sh

# Copy oauth2 proxy and start it
RUN mkdir /oauth2-proxy
RUN cd /oauth2-proxy && curl https://api.github.com/repos/oauth2-proxy/oauth2-proxy/releases/latest | grep -E 'browser_download_url.*linux-amd64.tar.gz' | cut -d'"' -f4 | xargs -n1 wget -q -O proxy.tar.gz && tar xzf proxy.tar.gz
RUN cp /oauth2-proxy/oauth2-proxy*.linux-amd64/oauth2-proxy /usr/local/bin/oauth2-proxy
RUN chmod +x /usr/local/bin/oauth2-proxy

USER turbinia
CMD ["/home/turbinia/start.sh"]
EXPOSE 9376/tcp
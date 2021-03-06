FROM ubuntu:18.04

RUN apt-get update && apt-get -y install \
apt-transport-https \
apt-utils \
ca-certificates \
libterm-readline-gnu-perl \
python3 \
python3-pip \
software-properties-common \
&& rm -rf /var/lib/apt/lists/*

RUN pip3 install pip --upgrade
RUN pip3 install urllib3 cryptography --upgrade

ADD requirements.txt /tmp/
RUN cd /tmp/ && pip3 install -r requirements.txt
ADD dfvfs_requirements.txt /tmp/
RUN cd /tmp/ && pip3 install -r dfvfs_requirements.txt

ADD . /tmp/
RUN cd /tmp/ && python3 setup.py install

RUN useradd -r -s /bin/nologin -G disk turbinia

RUN mkdir /etc/turbinia && mkdir -p /mnt/turbinia/ && mkdir -p /var/lib/turbinia/ \
&& mkdir -p /var/log/turbinia/ && chown -R turbinia:turbinia /mnt/turbinia/ \
&& mkdir -p /etc/turbinia/ \
&& chown -R turbinia:turbinia /var/lib/turbinia/ \
&& chown -R turbinia:turbinia /etc/turbinia/ \
&& chown -R turbinia:turbinia /var/log/turbinia/

COPY docker/server/start.sh /home/turbinia/start.sh
RUN chmod +x /home/turbinia/start.sh
USER turbinia
CMD ["/home/turbinia/start.sh"]
# Expose Prometheus endpoint.
EXPOSE 8000/tcp

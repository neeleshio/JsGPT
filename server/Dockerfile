FROM nikolaik/python-nodejs:python3.11-nodejs16-slim

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt && pip cache purge

# Flask
CMD ["sh", "launch_app.sh"]
EXPOSE 5601

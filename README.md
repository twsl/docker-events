# docker-events

Show docker events - plain and simple

Based on [docker-events-service](https://github.com/heyMP/docker-events-service), simplified for my own needs.

## Usage

```yml
version: "3"
services:
  docker-events:
    image: twsl/docker-events
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
```

# dataset-service

Zawjen Dataset service

## Setup

```bash
docker compose --env-file .env up -d
```

```bash
docker compose down -v
```

### Database

```bash
docker exec -it dataset-service-zawjen-postgres-db-1 psql -U kong
```

### Kong

#### Install Kong

#### Verify Kong

```bash
curl -i -X GET --url http://localhost:8001/services
```

Admin Site

```bash
http://localhost:8002
```

### Keycloak

#### Verify

```bash
http://localhost:8080/admin
```
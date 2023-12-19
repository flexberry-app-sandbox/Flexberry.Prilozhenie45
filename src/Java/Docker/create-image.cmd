docker build --no-cache -f SQL\Dockerfile.PostgreSql -t prilozhenie_4-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t prilozhenie_4-java/app ../../..

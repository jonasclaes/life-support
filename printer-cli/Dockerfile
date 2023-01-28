FROM docker.io/python:3 as builder

WORKDIR /app

RUN curl -sSL https://install.python-poetry.org | python3 -

COPY . .

RUN /root/.local/bin/poetry install --no-root
RUN /root/.local/bin/poetry build

FROM docker.io/python:3

ARG VERSION=0.1.0

WORKDIR /app

COPY --from=builder /app/dist/printer_cli-${VERSION}-py3-none-any.whl /app

RUN pip install ./printer_cli-${VERSION}-py3-none-any.whl

ENTRYPOINT [ "printer-cli" ]

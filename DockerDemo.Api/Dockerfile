FROM mcr.microsoft.com/dotnet/sdk:8.0 as build-asp
WORKDIR /app
COPY . .
RUN dotnet restore
RUN dotnet publish -c Release -o /app/published-app

FROM mcr.microsoft.com/dotnet/aspnet:8.0 as runtime
WORKDIR /app
#net 6-7
#ENV ASPNETCORE_URLS=http://+:6050
#net8
ENV ASPNETCORE_HTTP_PORTS=6050
EXPOSE 6050
# metrics

COPY --from=build-asp /app/published-app /app

# Define APP_UID
ARG APP_UID=1000

# Create a user with APP_UID
RUN addgroup --gid $APP_UID appgroup && \
    adduser --disabled-password --gecos '' --uid $APP_UID --ingroup appgroup appuser

# Create the Logs directory and ensure appuser has the necessary permissions
RUN mkdir -p /app/Logs && \
    chown -R appuser:appgroup /app/Logs

# always use non root user
USER appuser

ENTRYPOINT [ "dotnet", "/app/DockerDemo.Api.dll" ]



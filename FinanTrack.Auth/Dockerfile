# See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

# This stage is used when running from VS in fast mode (Default for Debug configuration)
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
USER $APP_UID
WORKDIR /finantrack_auth
EXPOSE 8080
EXPOSE 8081


# This stage is used to build the service project
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["FinanTrack.Auth.csproj", "."]
RUN dotnet restore "./FinanTrack.Auth.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "./FinanTrack.Auth.csproj" -c $BUILD_CONFIGURATION -o /finantrack_auth/build

# This stage is used to publish the service project to be copied to the final stage
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./FinanTrack.Auth.csproj" -c $BUILD_CONFIGURATION -o /finantrack_auth/publish /p:UseAppHost=false

# This stage is used in production or when running from VS in regular mode (Default when not using the Debug configuration)
FROM base AS final
WORKDIR /finantrack_auth
COPY --from=publish /finantrack_auth/publish .
ENTRYPOINT ["dotnet", "FinanTrack.Auth.dll"]
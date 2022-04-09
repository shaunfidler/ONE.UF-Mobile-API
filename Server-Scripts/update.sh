#!/bin/bash
killall node
cd ./ONE.UF-Mobile-API/ONE.UF-Mobile-API
git pull
cd ~
cd ./ONE.UF-Mobile-Backend/ONE.UF-Mobile-Backend
git pull
cd ~
./start_mock_api.sh
./start_backend.sh
sleep .5
./list_node_servers.sh

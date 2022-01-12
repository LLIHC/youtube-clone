#!/usr/bin/env bash

set -e
root=$(cd $(dirname $(readlink $0 || echo $0))/..;/bin/pwd)

cd ${root}

python3 -m venv ${root}/venv
source  ${root}/venv/bin/activate

pip install --upgrade pip
pip install -r ${root}/requirements.txt

pre-commit install

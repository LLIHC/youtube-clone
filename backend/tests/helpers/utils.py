from typing import Any, Iterable, List, Tuple, Union

import pytest


def gen_params(
    keys: Union[str, List[str]], values: List[Any]
) -> Tuple[List[str], List[Any]]:
    if isinstance(keys, str):
        keys = [keys]
    parameters = []
    id_string = ", ".join([key + "={}" for key in keys])
    for value in values:
        if isinstance(value, Iterable):
            if len(keys) == 1:
                parameter = pytest.param(value, id=id_string.format(*value))
            elif len(keys) == len(value):
                parameter = pytest.param(*value, id=id_string.format(*value))
            else:
                raise ValueError("keys and values must have the same length")
        else:
            parameter = pytest.param(value, id=id_string.format(value))
        parameters.append(parameter)
    return keys, parameters

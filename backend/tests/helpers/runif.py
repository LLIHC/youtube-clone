from typing import Type

import pytest
import torch
from _pytest.mark.structures import MarkDecorator


def runif(*args, min_gpus: int = 0) -> Type[MarkDecorator]:
    """
    Decorator to run a test only if all conditions are True.
    """
    conditions = []
    reasons = []

    if min_gpus:
        conditions.append(torch.cuda.device_count() >= min_gpus)
        reasons.append(f"GPUs >= {min_gpus}")

    # all(conditions) should be True, otherwise the test will be skipped.
    condition = not all(conditions)
    reason = f"Requires: [{', '.join(reasons)}]"

    return pytest.mark.skipif(*args, condition=condition, reason=reason)

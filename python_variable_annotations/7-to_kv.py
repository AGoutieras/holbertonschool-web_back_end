#!/usr/bin/env python3
"""Return a tuple with a key and the square of a value."""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    return (k, v * v)

#!/usr/bin/env python3
"""Create a function that multiplies by a given factor."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    def mul(x: float) -> float:
        return x * multiplier
    return mul

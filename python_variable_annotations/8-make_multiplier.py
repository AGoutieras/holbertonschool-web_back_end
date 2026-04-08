#!/usr/bin/env python3
"""Create a function that multiplies by a given factor."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies inputs by multiplier."""
    def mul(x: float) -> float:
        """Multiply x by the outer multiplier value."""
        return x * multiplier
    return mul

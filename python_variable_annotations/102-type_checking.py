#!/usr/bin/env python3
"""Duplicate sequence elements according to a zoom factor."""

from typing import Sequence, Any, List


def zoom_array(lst: Sequence[Any], factor: int = 2) -> List[Any]:
    """Return a list with each input item repeated by factor."""
    zoomed_in: List[Any] = [
        item for item in lst
        for i in range(factor)
    ]
    return zoomed_in


array = [12, 72, 91]

zoom_2x = zoom_array(array)

zoom_3x = zoom_array(array, 3)

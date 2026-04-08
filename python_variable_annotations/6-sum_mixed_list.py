#!/usr/bin/env python3
"""Compute the sum of a mixed list of ints and floats."""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    return sum(mxd_lst)

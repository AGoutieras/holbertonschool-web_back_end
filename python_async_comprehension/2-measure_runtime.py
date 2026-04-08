#!/usr/bin/env python3
"""Measure runtime of parallel async comprehensions."""

import asyncio
from time import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime():
    """Return total runtime for four concurrent comprehensions."""
    start = time()
    calls = [async_comprehension() for _ in range(4)]
    await asyncio.gather(*calls)
    end = time()
    return end - start

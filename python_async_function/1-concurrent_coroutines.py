#!/usr/bin/env python3
"""Run multiple wait_random coroutines concurrently."""

import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Return sorted delays from n concurrent wait_random calls."""
    calls = [wait_random(max_delay) for _ in range(n)]
    delays = []
    for coroutine in asyncio.as_completed(calls):
        delay = await coroutine
        delays.append(delay)
    return delays

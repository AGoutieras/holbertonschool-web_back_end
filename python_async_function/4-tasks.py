#!/usr/bin/env python3
"""Execute task-based random waits concurrently."""

import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Return sorted delays from n scheduled wait_random tasks."""
    calls = [task_wait_random(max_delay) for _ in range(n)]
    delays = []

    for coroutine in asyncio.as_completed(calls):
        delay = await coroutine
        delays.append(delay)
    return delays

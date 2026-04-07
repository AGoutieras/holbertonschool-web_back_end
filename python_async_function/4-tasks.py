import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    calls = [task_wait_random(max_delay) for _ in range(n)]
    delays = []

    for coroutine in asyncio.as_completed(calls):
        delay = await coroutine
        delays.append(delay)
    return delays

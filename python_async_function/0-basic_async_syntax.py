#!/usr/bin/env python3
"""Define an async coroutine that waits for a random delay."""

import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """Wait for a random delay up to max_delay and return it."""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay

#!/usr/bin/env python3
"""Create tasks from wait_random coroutine calls."""

import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Return a scheduled task for wait_random(max_delay)."""
    return asyncio.create_task(wait_random(max_delay))

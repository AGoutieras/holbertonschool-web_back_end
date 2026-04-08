#!/usr/bin/env python3
"""Measure average runtime of concurrent async execution."""

from time import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Return average execution time per coroutine."""
    start = time()
    asyncio.run(wait_n(n, max_delay))
    end = time()
    total = end - start
    return total / n

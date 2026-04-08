#!/usr/bin/env python3
"""Collect async_generator values using async comprehension."""

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension():
    """Return a list of values produced by async_generator."""
    return [x async for x in async_generator()]

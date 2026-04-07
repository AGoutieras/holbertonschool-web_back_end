async_generator = __import__('0-async_generator').async_generator


async def async_comprehension():
    return [x async for x in async_generator()]

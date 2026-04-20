#!/usr/bin/env python3
"""Helper function for pagination."""


def index_range(page, page_size):
    """Return a tuple of start and end index for a given page and page size"""
    start = (page - 1) * page_size
    end = start + page_size

    return (start, end)

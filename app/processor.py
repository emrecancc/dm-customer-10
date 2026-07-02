import re


def process(lines):
    """Process a list of lines, extracting key=value pairs.

    Parameters
    ----------
    lines : Iterable[str]
        Lines to process.

    Returns
    -------
    dict
        Mapping of keys to integer values.
    """
    result = {}
    for line in lines:
        # Use a normal assignment instead of the walrus operator for Python 3.7 compatibility
        m = re.match(r'(\w+)=(\d+)', line)
        if m:
            key, value = m.group(1), int(m.group(2))
            result[key] = value
        else:
            # If the line does not match the expected pattern, ignore it
            continue
    return result

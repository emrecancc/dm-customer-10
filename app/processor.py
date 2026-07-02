import re


def process_line(line):
    m = re.match(r'(\w+)=(\d+)', line)
    if m:
        key, value = m.group(1), int(m.group(2))
        return key, value
    return None


def process(lines):
    result = {}
    for line in lines:
        parsed = process_line(line)
        if parsed:
            key, value = parsed
            result[key] = value
    return result

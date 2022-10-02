import re


prompt_parser = re.compile("""
    (?P<prompt>                # capture group for 'prompt'
    [^:]+                      # match one or more non ':' characters
    )                          # end 'prompt'
    (?:                        # non-capture group
    :+                         # match one or more ':' characters
    (?P<weight>                # capture group for 'weight'
    -?\\d+(?:\\.\\d+)?            # match positive or negative decimal number
    )?                         # end weight capture group, make optional
    \\s*                        # strip spaces after weight
    |                          # OR
    $                          # else, if no ':' then match end of line
    )                          # end non-capture group
""", re.VERBOSE)


# grabs all text up to the first occurrence of ':' as sub-prompt
# takes the value following ':' as weight
# if ':' has no value defined, defaults to 1.0
# repeats until no text remaining
def split_weighted_subprompts(input_string, normalize=True):
    parsed_prompts = [(match.group("prompt"), float(match.group("weight") or 1)) for match in
                      re.finditer(prompt_parser, input_string)]
    if not normalize:
        return parsed_prompts
    # this probably still doesn't handle negative weights very well
    weight_sum = sum(map(lambda x: x[1], parsed_prompts))
    return [(x[0], x[1] / weight_sum) for x in parsed_prompts]

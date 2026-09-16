def create_counter(init):
    init_val = init
    cur_val = init

    def increment():
        nonlocal cur_val
        cur_val += 1
        return cur_val

    def decrement():
        nonlocal cur_val
        cur_val -= 1
        return cur_val

    def reset():
        nonlocal cur_val
        cur_val = init_val
        return cur_val

    return {
        "increment": increment,
        "decrement": decrement,
        "reset": reset
    }

counter = create_counter(5)
print(counter["increment"]())  # 6
print(counter["increment"]())  # 7
print(counter["decrement"]())  # 6
print(counter["reset"]())      # 5

import json


def generate_jsons(file):
    data = json.load(file)

    # top 10 articles by comments
    top_comments = sorted(data, key=lambda k: k['comments'], reverse=True)[:10]

    with open('data/top_comments.json', 'w') as f:
        json.dump(top_comments, f, ensure_ascii=False, indent=4)

    # top 10 articles by shares
    top_shares = []

    for x in range(len(data)):
        try:
            _ = data[x]['shares']
            top_shares.append(data[x])
        except Exception:
            pass

    top_shares = sorted(top_shares, key=lambda k: k['shares'], reverse=True)[:10]

    with open('data/top_shares.json', 'w') as f:
        json.dump(top_shares, f, ensure_ascii=False, indent=4)

    # top 10 articles by reactions
    top_reactions = sorted(data, key=lambda k: k['total_reacts'], reverse=True)[:10]

    with open('data/top_reactions.json', 'w') as f:
        json.dump(top_reactions, f, ensure_ascii=False, indent=4)


with open('data.json', 'r') as file:
    generate_jsons(file)

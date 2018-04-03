import json
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    # load json files
    with app.open_resource('static/top_comments.json') as data:
        top_comments = json.loads(data.read().decode('utf-8'))

    title = 'Top Fake News by Number of Comments'
    labels = [top_comments[x]['name'] for x in range(len(top_comments))]
    data = [top_comments[x]['comments'] for x in range(len(top_comments))]

    print(title)
    print(labels)
    print(data)

    return render_template('index.html') # , labels=labels, title=title, data=data)


# @app.route('/update-plot')
# def update_plot():
#     # load json files
#     with app.open_resource('static/top_comments.json') as data:
#         top_comments = json.loads(data.read().decode('utf-8'))

#     with app.open_resource('static/top_reactions.json') as data:
#         top_reactions = json.loads(data.read().decode('utf-8'))

#     with app.open_resource('static/top_shares.json') as data:
#         top_shares = json.loads(data.read().decode('utf-8'))

#     criteria = criteria[request.args.get('ref', 0, type=int)]

#     return jsonify(labels=labels, title=title, data=data)


if __name__ == '__main__':
    app.run(debug=True)

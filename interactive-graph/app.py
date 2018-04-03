import json
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    # load json files
    with app.open_resource('static/top_comments.json') as data:
        top_comments = json.loads(data.read().decode('utf-8'))

    metric = 'Comments'
    labels = [top_comments[x]['name'][:10] +
              '...' for x in range(len(top_comments))]
    data = [top_comments[x]['comments'] for x in range(len(top_comments))]
    title = [top_comments[x]['name'] for x in range(len(top_comments))]
    message = [top_comments[x]['message'] for x in range(len(top_comments))]

    return render_template('index.html', labels=labels, title=title, data=data,
                           metric=metric, message=message)


@app.route('/update-plot')
def update_plot():
    # load json files
    with app.open_resource('static/top_comments.json') as data:
        top_comments = json.loads(data.read().decode('utf-8'))

    with app.open_resource('static/top_reactions.json') as data:
        top_reactions = json.loads(data.read().decode('utf-8'))

    with app.open_resource('static/top_shares.json') as data:
        top_shares = json.loads(data.read().decode('utf-8'))

    criteria = request.args.get('ref', 0, type=int)

    # by comments
    if criteria == 0:
        metric = 'Comments'
        labels = [top_comments[x]['name'][:10] +
                  '...' for x in range(len(top_comments))]
        data = [top_comments[x]['comments'] for x in range(len(top_comments))]
        title = [top_comments[x]['name'] for x in range(len(top_comments))]
        message = [top_comments[x]['message']
                   for x in range(len(top_comments))]
    # by shares
    elif criteria == 1:
        metric = 'Shares'
        labels = [top_shares[x]['name'][:10] +
                  '...' for x in range(len(top_shares))]
        data = [top_shares[x]['shares'] for x in range(len(top_shares))]
        title = [top_shares[x]['name'] for x in range(len(top_shares))]
        message = [top_shares[x]['message'] for x in range(len(top_comments))]
    # by reactions
    elif criteria == 2:
        metric = 'Reactions'
        labels = [top_reactions[x]['name'][:10] +
                  '...' for x in range(len(top_reactions))]
        data = [top_reactions[x]['total_reacts']
                for x in range(len(top_reactions))]
        title = [top_reactions[x]['name']
                 for x in range(len(top_reactions))]
        message = [top_reactions[x]['message'] for x in range(len(top_comments))]

    return jsonify(labels=labels, title=title, data=data, metric=metric, message=message)


if __name__ == '__main__':
    app.run(debug=True)

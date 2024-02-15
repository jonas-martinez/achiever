'use strict'

import { View, ViewImpl } from "@lenra/app"

export default function (_data, { page, guards = [], context }, ctx) {
  let nextView = page
  if (guards instanceof Array && guards.length > 0) {
    const guard = jsonToView(guards[0]);
    nextView = guard.props({ page, guards: guards.slice(1), context: (context ?? ctx) });
  }

  if (nextView == page) {
    nextView = jsonToView(nextView);
    if (!nextView.model.props) nextView.model.props = {};
    nextView.model.props.context = (context ?? ctx);
  }
  return nextView;
}

function jsonToView(json) {
  if (!(json instanceof ViewImpl)) {
    let view = View(json.name)
    if (json.find && json.find.coll && json.find.query) {
      view = view.find(json.find.coll, json.find.query);
    }

    return view;
  }

  return json;
}
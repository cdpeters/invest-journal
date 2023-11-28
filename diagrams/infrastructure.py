"""Generate project's infrastructure diagram."""

from pathlib import Path

from diagrams import Cluster, Diagram, Edge
from diagrams.custom import Custom
from diagrams.generic.storage import Storage
from diagrams.onprem.client import Client
from diagrams.programming.framework import React

with Diagram(
    "Invest Journal Infrastructure",
    filename="infrastructure",
    outformat="svg",
    graph_attr={"fontname": "Calibri", "layout": "dot"},
):
    images_dir = Path.cwd() / "images"
    client = Client("User Client", fontname="Calibri")

    with Cluster(
        "External Data Sources",
        graph_attr={"bgcolor": "cornsilk", "fontname": "Calibri", "labelloc": "b"},
    ):
        tradier = Custom(
            "Tradier CSV", str(images_dir / "tradier.png"), fontname="Calibri"
        )
        tradestation = Custom(
            "TradeStation API", str(images_dir / "tradestation.png"), fontname="Calibri"
        )

    with Cluster("Railway Hosted Services", graph_attr={"fontname": "Calibri"}):
        with Cluster(
            "Backend", graph_attr={"bgcolor": "mintcream", "fontname": "Calibri"}
        ):
            backend_server = Custom(
                "FastAPI\nPython Server",
                str(images_dir / "fastapi.png"),
                fontname="Calibri",
            )
            db = Storage("SQL Database", fontname="Calibri")

        with Cluster(
            "Frontend", graph_attr={"bgcolor": "#f9eee8", "fontname": "Calibri"}
        ):
            journal_app = React("App", fontname="Calibri")
            settings_db = Custom(
                "SQLite", str(images_dir / "sqlite.png"), fontname="Calibri"
            )

    tradier - Edge(style="invis") - tradestation
    [tradier, tradestation] >> Edge(color="cyan3") >> backend_server
    backend_server >> Edge(label="SQLModel", color="tomato", fontname="Calibri") << db
    (
        journal_app
        >> Edge(label="app settings", color="mediumslateblue", fontname="Calibri")
        << settings_db
    )
    journal_app >> Edge(color="tomato") << backend_server
    client >> Edge(color="tomato") << journal_app

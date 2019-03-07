import holoviews as hv
import HVfns as fns

renderer = hv.renderer('bokeh')

t=fns.gettransdata()

h=fns.makehv(t,['Discount Name','Quantity'],['Customer','Cashier'],['Customer'],graphtype=hv.Points)
doc=renderer.server_doc(h)
doc.title="test"
from django.conf.urls import url, patterns, include
#
from thinkster_django_angular_boilerplate.views import IndexView
from rest_framework_nested import routers
from authentication.views import AccountViewSet
from authentication.views import LoginView
from authentication.views import LogoutView

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)
urlpatterns = patterns(
    '',
    url(r'^api/v1/auth/login/$', LoginView.as_view(), name='login'),
    url(r'^api/v1/auth/logout/$', LogoutView.as_view(), name='logout'),
    url(r'^api/v1/', include(router.urls)),
    url('^.*$', IndexView.as_view(), name='index'),
)

# from rest_framework_nested import routers
# from authentication.views import AccountViewSet
#
# router = routers.SimpleRouter()
# router.register(r'accounts', AccountViewSet)
#
# urlpatterns = patterns(
#      '',
#     # ... URLs
#     url(r'^api/v1/', include(router.urls)),
#
#     url('^.*$', IndexView.as_view(), name='index'),
# )
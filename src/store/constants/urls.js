// https://e.51baiwang.com/dev/wander/v2.0/auth/appToken/v1.0
// export const BASE_URL = 'https://e.51baiwang.com/wander/';
// export const BASE_URL = 'https://xwhy-pre.51baiwang.com/wander/';
export const BASE_URL = 'http://127.0.0.1:10100/wander/';
export const IMAGE_HOST = 'https://xwhy-pre.51baiwang.com/image';
export const BASE_VERSION = 'v2.0';
export const TOKEN_URL = `${BASE_URL}${BASE_VERSION}/auth/appToken/v1.0`;
export const TOKEN_REFRESH_URL = `${BASE_URL}${BASE_VERSION}/auth/refreshToken/v1.0`;

// login modal
export const LOGIN_CODE = `${BASE_URL}${BASE_VERSION}/auth/mobileCode/v1.0`; //获取登陆验证码
export const SETPWD_CODE = `${BASE_URL}${BASE_VERSION}/auth/resetCode/v1.0`; //获取重置密码验证码
export const REGISTER_CODE = `${BASE_URL}${BASE_VERSION}/auth/registerCode/v1.0`; //获取注册验证码
export const LOGIN = `${BASE_URL}${BASE_VERSION}/auth/login/v1.0`;
export const LOGIN_BY_CODE = `${BASE_URL}${BASE_VERSION}/auth/mobileLogin/v1.0`;
export const CREATE_USER = `${BASE_URL}${BASE_VERSION}/auth/register/v1.0`;
export const SETPWD = `${BASE_URL}${BASE_VERSION}/auth/resetPwd/v1.0`;

// 通用配置信息

// 通用代码列表 搜索过滤条件
export const CONFIG_COMMON_CODE = `${BASE_URL}${BASE_VERSION}/config/commonCode/v1.0`;
// 地区列表
export const CONFIG_AREA = `${BASE_URL}${BASE_VERSION}/select/areas/v1.0`;
// 地级市列表
export const CONFIG_REGION = `${BASE_URL}${BASE_VERSION}/config/region/v1.0`;
// 智能排序列表
export const CONFIG_SORT_COLS = `${BASE_URL}${BASE_VERSION}/select/sortcols/v1.0`;
// 热搜列表
export const HOTWORDS_URL = `${BASE_URL}${BASE_VERSION}/select/hotwords/v1.0`;
// 行业分析-指标下拉框
export const CONFIG_INDUSTRY_KPI = `${BASE_URL}${BASE_VERSION}/select/industrykpi/v1.0`;
// 城市地区列表 主要用于地产估值的选项
export const CONFIG_REGION_SELECT = `${BASE_URL}${BASE_VERSION}/select/region/v1.0`;
// 获取版本信息
export const GET_APP_VERSION = `${BASE_URL}${BASE_VERSION}/version/appVersion/v1.0`;
// 新闻舆情词库
export const GET_NEWS_WORDS = `${BASE_URL}${BASE_VERSION}/select/news/v1.0`;
// 新闻舆情过滤
export const GET_NEWS_FILTER = `${BASE_URL}${BASE_VERSION}/select/newsFilter/v1.0`;
// 搜索建议
export const SEARCH_SUGGEST = `${BASE_URL}${BASE_VERSION}/search/companyListByName/v1.0`;
// 判决搜索
export const SEARCH_SUGGEST_JUDGMENT = `${BASE_URL}${BASE_VERSION}/search/judgment/v1.0`;
// 失信搜索
export const SEARCH_SUGGEST_DISAPPOINT = `${BASE_URL}${BASE_VERSION}/search/disappoint/v1.0`;
// 股东信息搜索
export const SEARCH_SUGGEST_STOCKHOLDER = `${BASE_URL}${BASE_VERSION}/search/stockholder/v1.0`;
// 上市公司信息搜索
export const SEARCH_SUGGEST_IPO = `${BASE_URL}${BASE_VERSION}/search/ipo/v1.0`;
// 商品搜索
export const SEARCH_SUGGEST_PRODUCT = `${BASE_URL}${BASE_VERSION}/search/product/v1.0`;

const USER_CENTER = {
    logout: `${BASE_URL}${BASE_VERSION}/auth/logout/v1.0`,
    USER_PROFILE: `${BASE_URL}${BASE_VERSION}/user/profile/v1.0`,
    GET_ATTENTIONS: `${BASE_URL}${BASE_VERSION}/attention/companyList/v1.0`,
    ADD_ATTENTION: `${BASE_URL}${BASE_VERSION}/attention/put/v1.0`,
    CANCEL_ATTENTION: `${BASE_URL}${BASE_VERSION}/attention/delete/v1.0`,
};
export const API_URL = {
    USER_CENTER,
};

// 用户是否关注当前企业
export const COMPANY_DETAIL_ATTENTION = `${BASE_URL}${BASE_VERSION}/attention/get/v1.0`;
// 获取企业基本信息
export const COMPANY_DETAIL_BASE_INFO_BY_ID = `${BASE_URL}${BASE_VERSION}/company/base/infoById/v1.0`;
//税务信息
export const COMPANY_DETAIL_SHUIWUXINXI_BY_ID = `${BASE_URL}${BASE_VERSION}/company/taxList/v1.0`;
//环保信息
export const COMPANY_DETAIL_HUANBAOXINXI_BY_ID = `${BASE_URL}${BASE_VERSION}/company/environmentList/v1.0`;
// 股票实时价格
export const STOCK_PRICE_BY_XUEQIU = 'https://xueqiu.com/v4/stock/quotec.json';

// 投融资相关

// 对外投资
export const COMPANY_SUB_DUIWAITOUZI = `${BASE_URL}${BASE_VERSION}/company/base/investList/v1.0`;
// 债券融资
export const COMPANY_SUB_ZHAIQUANRONGZI = `${BASE_URL}${BASE_VERSION}/company/bondsList/v1.1`;
// 股权出质
export const COMPANY_SUB_GUQUANCHUZHI = `${BASE_URL}${BASE_VERSION}/company/equityPledgedList/v1.1`;
// 股票出质
export const COMPANY_SUB_GUPIAOCHUZHI = `${BASE_URL}${BASE_VERSION}/company/stockPledgedList/v1.0`;
// 动产抵押
export const COMPANY_SUB_DONGCHANDIYA = `${BASE_URL}${BASE_VERSION}/company/chattelMortgageRegList/v1.0`;
// 股权融资
export const COMPANY_SUB_GUQUANRONGZI = `${BASE_URL}${BASE_VERSION}/company/manage/financingList/v1.0`;

// 风险信息相关

// 法院信息 -- 法院判决列表
export const COMPANY_SUB_FAYUANPANJUE = `${BASE_URL}${BASE_VERSION}/company/court/judgeList/v1.0`;
// 法院信息 -- 法院公告列表
export const COMPANY_SUB_FAYUANGONGGAO = `${BASE_URL}${BASE_VERSION}/company/court/noticeList/v1.0`;
// 法院信息 -- 被执行人列表
export const COMPANY_SUB_BEIZHIXINGREN = `${BASE_URL}${BASE_VERSION}/company/court/executedpersonList/v1.0`;
// 法院信息--判决详情信息
// 法院信息 -- 被执行人列表
export const COMPANY_COURT_JUDGEINFO = `${BASE_URL}${BASE_VERSION}/company/court/judgeInfo/v1.0`;
// 失信信息
export const COMPANY_SUB_SHIXINXINXI = `${BASE_URL}${BASE_VERSION}/company/dishonestyList/v1.0`;
// 失信信息详情
export const COMPANY_SUB_SHIXINXINXI_DETAIL = `${BASE_URL}${BASE_VERSION}/company/dishonestyInfo/v1.0`;
// 经营异常
export const COMPANY_SUB_JINGYINGYICHANG = `${BASE_URL}${BASE_VERSION}/company/operationAbnormityList/v1.0`;
// 行政处罚
export const COMPANY_SUB_XINGZHENGCHUFA = `${BASE_URL}${BASE_VERSION}/company/punishList/v1.0`;
// 工商信息 - 登记信息
export const COMPANY_BUSINESS_REGINFO = `${BASE_URL}${BASE_VERSION}/company/business/reginfo/v1.0`;
export const COMPANY_BUSINESS_EMPLOYEES = `${BASE_URL}${BASE_VERSION}/company/business/employeeList/v1.0`;
// 资质认证
export const COMPANY_PERMISSION = `${BASE_URL}${BASE_VERSION}/company/permissionList/v1.1`;
// 新闻舆情
export const COMPANY_XINWENYUQING = 'https://www.baidu.com/s';
// 股权关系 股权结构
export const COMPANY_EQUITY_STRUCT = `${BASE_URL}${BASE_VERSION}/company/equityStructure/v1.0`;
// 企业资金关系 图结构
export const COMPANY_FUNDS_RELATION = `${BASE_URL}${BASE_VERSION}/company/bilateralInvestList/v1.0`;
// 企业图谱
export const COMPANY_CHAIN_MAP = `${BASE_URL}${BASE_VERSION}/company/base/chainMap/v1.0`;

// 资产估值
// 城市地区列表（/select/regions/v1.0）
export const ASSET_VALUATION_REGION_URL = `${BASE_URL}${BASE_VERSION}/select/regions/v1.0`;
// 资产估值-小区-模糊搜索
export const ASSET_VALUATION_RESIDENTIAL_QUARTER_URL = `${BASE_URL}${BASE_VERSION}/assetValuation/residentialQuarter/v1.0`;
// 资产估值-估值月份列表（/assetValuation/monthList/v1.0）
export const ASSET_VALUATION_MONTH_LIST_URL = `${BASE_URL}${BASE_VERSION}/assetValuation/monthList/v1.0`;
// 资产估值-房产估值趋势（/assetValuation/valuationTrend/v1.0）
export const ASSET_VALUATION_HOUSE_TREND_URL = `${BASE_URL}${BASE_VERSION}/assetValuation/valuationTrend/v1.0`;
// 资产估值-房产估值单月（/assetValuation/valuationMonth/v1.0）
export const ASSET_VALUATION_HOUSE_MONTH_URL = `${BASE_URL}${BASE_VERSION}/assetValuation/valuationMonth/v1.0`;
// 资产估值-股票-模糊搜索（/assetValuation/stockNameSearch/v1.0）
export const ASSET_VALUATION_STOCK_QUARTER_URL = `${BASE_URL}${BASE_VERSION}/assetValuation/stockNameSearch/v1.0`;
// 资产估值-股票-股票估值趋势
export const ASSET_VALUATION_STOCK_VALUE_TREND_URL = `${BASE_URL}${BASE_VERSION}/assetValuation/stock/v1.0`;
// 资产估值-基金-模糊搜索
export const ASSET_VALUATION_FUND_QUARTER_URL = `${BASE_URL}${BASE_VERSION}/assetValuation/fund/search/v1.0`;
// 资产估值-基金-根据基金代码获取基金单价
export const ASSET_VALUATION_FUND_PRICE_URL = `${BASE_URL}${BASE_VERSION}/assetValuation/fund/valuation/v1.0`;
// 资产估值-基金估值-单价走势
export const ASSET_VALUATION_FUND_CHART_URL = `${BASE_URL}${BASE_VERSION}/assetValuation/fund/valuationhis/v1.0`;
// 资产估值-基金估值-累计净值走势
export const ASSET_VALUATION_FUND_CHART_TOTALS_URL = `${BASE_URL}${BASE_VERSION}/assetValuation/fund/accumprice/valuationhis/v1.0`;
// 资产估值-债券估值-模糊搜索
export const ASSET_VALUATION_BOND_QUARTER_URL = `${BASE_URL}${BASE_VERSION}/assetValuation/bond/search/v1.0`;
// 资产估值-债券估值-单价
export const ASSET_VALUATION_BOND_PRICE_URL = `${BASE_URL}${BASE_VERSION}/assetValuation/bond/valuation/v1.0`;
// 资产估值-债券估值-单价走势
export const ASSET_VALUATION_BOND_CHART_URL = `${BASE_URL}${BASE_VERSION}/assetValuation/bond/valuationhis/v1.0`;
// 资产估值-黄金估值-种类列表
export const ASSET_VALUATION_GOLD_LIST_URL = `${BASE_URL}${BASE_VERSION}/assetValuation/gold/type/v1.0`;
// 资产估值-黄金估值-单价
export const ASSET_VALUATION_GOLD_PRICE_URL = `${BASE_URL}${BASE_VERSION}/assetValuation/gold/valuation/v1.0`;
// 资产估值-黄金估值-单价走势
export const ASSET_VALUATION_GOLD_CHART_URL = `${BASE_URL}${BASE_VERSION}/assetValuation/gold/valuationhis/v1.0`;

// 上市公司
// 上市公司企业信息
export const LISTEDCOMPANY_INFO = `${BASE_URL}${BASE_VERSION}/company/listedCompanyInfo/v1.0`;
// 上市公司-十大股东
export const LISTEDCOMPANY_STOCKHOLDERTOPTEN = `${BASE_URL}${BASE_VERSION}/company/topTenStockholderList/v1.0`;
// 上市公司-企业公告
export const LISTEDCOMPANY_NOTICE = `${BASE_URL}${BASE_VERSION}/company/companyNoticeList/v1.0`;
// 上市公司-行业分析
export const LISTEDCOMPANY_INDUSTRYANLYSIS = `${BASE_URL}${BASE_VERSION}/company/insturyAnalyzeList/v1.0`;
// 上市公司-财务数据
export const LISTEDCOMPANY_FINACIALREPORT = `${BASE_URL}${BASE_VERSION}/company/financialReport/v1.0`;
// 上市公司-财务数据-资产负债表
export const LISTEDCOMPANY_FINACIAL_BALANCESHEET = `${BASE_URL}${BASE_VERSION}/company/balanceSheet/v1.0`;
// 上市公司-财务数据-现金流量表
export const LISTEDCOMPANY_CASHFLOW = `${BASE_URL}${BASE_VERSION}/company/cashFlowSheet/v1.0`;
// 上市公司-关键指标
export const LISTEDCOMPANY_KPISHEET = `${BASE_URL}${BASE_VERSION}/company/kpiSheet/v1.0`;
// 上市公司-利润表
export const LISTEDCOMPANY_INCOMESHEET = `${BASE_URL}${BASE_VERSION}/company/incomeSheet/v1.0`;

//经营分析相关接口

// 获取公司的经营概况
export const BUSINESS_SUMMARY = `${BASE_URL}${BASE_VERSION}/business/company/v1.0`;
// 获取公司十大企业信息
export const BUSINESS_TOP_TEN = `${BASE_URL}${BASE_VERSION}/business/partner/v1.0`;
// 获取公司重点区域信息
export const BUSINESS_MAIN_AREA = `${BASE_URL}${BASE_VERSION}/business/areas/v1.0`;
// 获取公司热销产品信息
export const BUSINESS_HOT_PRODUCT = `${BASE_URL}${BASE_VERSION}/business/hotgoods/v1.0`;

// 热门企业URL
export const HOT_COMPANY_URL = `${BASE_URL}${BASE_VERSION}/search/hotCompany/v1.0`;

// 热门应用URL
export const HOT_APPS = `${BASE_URL}${BASE_VERSION}/search/hotApp/v1.0`;

// 版本请求url
export const VERTION_URL = `${BASE_URL}${BASE_VERSION}/version/appVersion/v1.0`;

// 变更记录
export const COMMON_API_CHANGE_LIST = `${BASE_URL}${BASE_VERSION}/company/base/changeList/v1.0`;

// 税务信息
export const COMMON_API_SHUIWUXINXI = `${BASE_URL}${BASE_VERSION}/company/taxList/v1.0`;

// 上市公司公告
export const COMPANY_SUB_ListedCompanyNotice = `${BASE_URL}${BASE_VERSION}/company/companyNoticeList/v1.0`;

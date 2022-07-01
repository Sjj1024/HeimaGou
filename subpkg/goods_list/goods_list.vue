<template>
	<view class="goods-list">
		<!-- 渲染商品组件即可 -->
		<view v-for="(item,index) in goodsList" :key="index" @click="gotoDetail(item)">
			<my-goods :good="item"></my-goods>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 定义请求参数对象
				queryObj: {
					query: "",
					cid: "",
					pagenum: 1,
					pagesize: 10
				},
				goodsList: [],
				total: 0,
				isLoading: false // 配置节流阀
			};
		},
		// 将页面跳转带过来的参数获取到，并赋值给请求参数对象	
		onLoad(options) {
			this.queryObj.query = options.query || ""
			this.queryObj.cid = options.cid || ""
			this.getGoodsList()
		},
		methods: {
			// 获取商品列表数据
			async getGoodsList(callBack) {
				this.isLoading = true
				const {
					data: res
				} = await uni.$http.get("/api/public/v1/goods/search", this.queryObj)
				this.isLoading = false
				// 数据请求完毕，就执行回调函数
				callBack && callBack()
				console.log(res);
				if (res.meta.status !== 200) return uni.$showMsg()
				// 获取数据成功后，给商品数据赋值
				this.goodsList = res.message.goods
				this.total = res.message.total
			},
			gotoDetail(goods) {
				uni.navigateTo({
					url: "/subpkg/goods_detail/goods_detail?goods_id=" + goods.goods_id
				})
			}
		},
		onReachBottom() {
			// 判断数据是否加载完毕
			if (this.queryObj.pagenum * this.queryObj.pagesize >= this.total) return uni.$showMsg("数据加载完毕！")
			// 根据节流阀关闭下拉获取新数据的接口
			if (this.isLoading) return
			this.queryObj.pagenum += 1
			this.getGoodsList()
		},
		onPullDownRefresh() {
			// 开启下拉刷新
			this.queryObj.pagenum = 1
			this.total = 0
			this.isLoading = false
			this.goodsList = []
			this.getGoodsList(() => uni.stopPullDownRefresh())
		}
	}
</script>

<style lang="scss">

</style>

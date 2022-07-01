<template>
	<view class="goods-item">
		<!-- 商品左侧图片区 -->
		<view class="goods-item-left">
			<image :src="good.goods_small_logo || defaultPic" class="goods-pic"></image>
		</view>
		<!-- 商品右侧区域信息 -->
		<view class="goods-item-right">
			<!-- 商品标题 -->
			<view class="good-name">
				{{good.goods_name}}
			</view>
			<!-- 商品价格 -->
			<view class="goods-price">
				¥{{good.goods_price | toFixed}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "my-goods",
		data() {
			return {
				defaultPic: "https://img-blog.csdnimg.cn/69b06016eb954b8eb354487bb8235646.png"
			};
		},
		props: {
			good: {
				type: Object,
				default: {}
			}
		},
		filters: {
			// 声明过滤器，处理商品价格
			toFixed(num) {
				return Number(num).toFixed(2)
			}
		}
	}
</script>

<style lang="scss">
	.goods-item {
		display: flex;
		padding: 10px 5px;
		border-bottom: 1px solid #f0f0f0;

		.goods-item-left {
			margin-right: 5px;

			.goods-pic {
				width: 100px;
				height: 100px;
				display: block;
			}
		}

		.goods-item-right {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.goods-name {
				font-size: 13px;
			}

			.goods-price {
				font-size: 16px;
				color: #c00000;
			}
		}
	}
</style>

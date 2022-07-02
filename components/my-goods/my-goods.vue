<template>
	<view class="goods-item">
		<!-- 商品左侧图片区 -->
		<view class="goods-item-left">
			<radio :checked="good.goods_state" color="#c00000" v-if="showRadio" @click="radioChange" />
			<image :src="good.goods_small_logo || defaultPic" class="goods-pic"></image>
		</view>
		<!-- 商品右侧区域信息 -->
		<view class="goods-item-right">
			<!-- 商品标题 -->
			<view class="good-name">
				{{good.goods_name}}
			</view>
			<view class="good-info">
				<!-- 商品价格 -->
				<view class="goods-price">
					¥{{good.goods_price | toFixed}}
				</view>
				<!-- 商品数量 -->
				<uni-number-box :min="1" :value="good.goods_count" v-if="showNum" @change="numChange"></uni-number-box>
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
			},
			showRadio: {
				type: Boolean,
				default: false
			},
			showNum: {
				type: Boolean,
				default: false
			}
		},
		filters: {
			// 声明过滤器，处理商品价格
			toFixed(num) {
				return Number(num).toFixed(2)
			}
		},
		methods: {
			radioChange() {
				this.$emit("radioChange", {
					goods_id: this.good.goods_id,
					goods_state: !this.good.goods_state,
					goods_count: this.good.goods_count
				})
			},
			numChange(num) {
				// console.log(num);
				this.$emit("radioChange", {
					goods_id: this.good.goods_id,
					goods_state: this.good.goods_state,
					goods_count: num
				})
			}
		}
	}
</script>

<style lang="scss">
	.goods-item {
		display: flex;
		width: 750rpx;
		box-sizing: border-box;
		padding: 10px 5px;
		border-bottom: 1px solid #f0f0f0;

		.goods-item-left {
			display: flex;
			justify-content: space-between;
			align-items: center;
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

			.good-info {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
		}
	}
</style>

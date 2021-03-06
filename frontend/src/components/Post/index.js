import React, {useState, useEffect} from 'react'
import {Stack, Divider, Avatar, Box, Text, Link, Image} from '@chakra-ui/core'
import {Link as NavLink} from 'react-router-dom'

export const Post = ({
  id,
  title,
  subTitle,
  content,
  featuredImage,
  name,
  authorId,
  avatarUrl,
}) => {
  return (
    <Box key={id} p={4} display={{md: 'flex'}} boxShadow="md">
      <Box flexShrink="0">
        <Image
          rounded="lg"
          width={{md: 40}}
          fallbackSrc="https://via.placeholder.com/150"
          src={featuredImage}
          alt="Dummy image"
        />
      </Box>
      <Box mt={{base: 4, md: 0}} ml={{md: 6}}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="teal.600"
        >
          {title}
        </Text>
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href="#"
        >
          {subTitle}
        </Link>
        <Text mt={2} color="gray.500">
          {content}
        </Text>
        <Divider />
        <Stack isInline>
          <NavLink to={`/users/${authorId}`}>
            <Avatar name="Dan Abrahmov" src={avatarUrl} />
          </NavLink>
          <Text mt={3}>{name}</Text>
        </Stack>
      </Box>
    </Box>
  )
}

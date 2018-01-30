﻿using System;

namespace iShop.Core.Entities
{
    public class Image : EntityBase
    {
        public string FileName { get; set; }
        public Guid ProductId { get; set; }
        public Product Product { get; set; }
    }
}
